import * as React from 'react'
import { Modal } from 'decentraland-ui'

import { Props } from '../Modals.types'

import './ShortcutsModal.css'

export default class ShortcutsModal extends React.PureComponent<Props> {
  handleOnClose = () => {
    const { modal, onClose } = this.props
    onClose(modal.name)
  }

  render() {
    const { modal } = this.props

    return (
      <Modal open={modal.open} className="ShortcutsModal" size="small" onClose={this.handleOnClose}>
        <Modal.Content>
          <div className="title">Shortcuts</div>

          <div className="shortcut-list">
            <div className="subtitle">BASIC CONTROLS</div>

            <div className="shortcuts">
              <div className="shortcut">
                <div className="name">Undo</div>
                <div className="keybinding">cmd + z</div>
              </div>

              <div className="shortcut">
                <div className="name">Redo</div>
                <div className="keybinding">cmd + shift + z</div>
              </div>

              <div className="shortcut">
                <div className="name">Duplicate</div>
                <div className="keybinding">cmd + d</div>
              </div>

              <div className="shortcut">
                <div className="name">Delete object</div>
                <div className="keybinding">Delete</div>
              </div>
            </div>

            <div className="shortcut-list">
              <div className="subtitle">EDITING</div>

              <div className="shortcut">
                <div className="name">Move</div>
                <div className="keybinding">m</div>
              </div>

              <div className="shortcut">
                <div className="name">Rotate</div>
                <div className="keybinding">r</div>
              </div>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}
