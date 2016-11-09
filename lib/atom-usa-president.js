'use babel';

import USAPresidentComponent from './usa-president-component';
import { CompositeDisposable } from 'atom';
import { h, render, Component } from 'preact';

export default {

  tile: null,

  activate(state) {
  },

  deactivate() {
    if (this.tile) {
      this.tile.dispose();
    }
  },

  consumeStatusBar(statusBar) {
    let span = document.createElement('span');
    span.classList.add('inline-block');
    render(h(USAPresidentComponent), span);
    this.tile = statusBar.addRightTile({item: span, priority: 0});
  },
};
