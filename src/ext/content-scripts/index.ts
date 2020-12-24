import { asyncifyAll } from 'chrome-ext-async';
import { getStore } from 'chrome-ext-mst-sync';
import { backgroundModel, id } from '../../models/background';
import { contentModel } from '../../models/content';
import '../../shared/lib/logger';
import logger from '../../shared/lib/logger';
import Message from '../../shared/messages/types';
import { MessageActions } from '../../types';

const ac = asyncifyAll()

const limit = 75

function shouldShowImage(el: HTMLImageElement) {
  return (
    el.naturalHeight <= limit || el.naturalWidth <= limit  ||
    el.height <= limit || el.width <= limit ||
    el.clientHeight <= limit || el.clientWidth <= limit
  )
}

function hideImage(el: HTMLImageElement) {
  el.classList.add('hide-img')
}

function swapBGImage(el: HTMLElement) { }

function elementHasBGImage(el: HTMLElement) {
  return el.style.backgroundImage
}

function showImage(img: HTMLImageElement){
  img.classList.add('show-img')
}

function parseNode(node: Node) {
  if(node instanceof HTMLImageElement && (!node.complete || node.src === '')){
    node.addEventListener('load', () => parseNode(node))
  }else if (node instanceof HTMLImageElement && shouldShowImage(node)) {
    logger.debug(`showing:`, node, ` width: ${node.naturalWidth}, height: ${node.naturalHeight}, complete: ${node.complete}`)
    showImage(node)
  } else if (node instanceof HTMLElement && elementHasBGImage(node)) {

  }
}

async function main() {
  const it = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT)

  let currentNode;

  while (currentNode = it.nextNode()) {
    parseNode(currentNode)
  }

  const observer = new MutationObserver((mutations) => {
    logger.debug('new mutations: ', mutations)
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        parseNode(node)

        if (node instanceof HTMLElement) {
          const imgs = node.querySelectorAll('img')
          imgs.forEach(parseNode)

        }
      })
    })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}
main()
