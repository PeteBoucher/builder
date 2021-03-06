import * as React from 'react'
import { Header, Button, Form } from 'decentraland-ui'
import Modal from 'decentraland-dapps/dist/containers/Modal'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'

import { ProjectLayout, Project, Layout } from 'modules/project/types'
import { getBlockchainParcelsFromLayout } from 'modules/project/utils'
import ProjectFields from 'components/ProjectFields'
import ProjectLayoutPicker from 'components/ProjectLayoutPicker'
import { Props, State } from './EditProjectModal.types'
import './EditProjectModal.css'

export default class EditProjectModal extends React.PureComponent<Props, State> {
  state = {
    title: this.props.currentProject.title,
    description: this.props.currentProject.description,

    rows: this.props.currentProject.layout.rows,
    cols: this.props.currentProject.layout.cols,
    hasError: false
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.currentProject && nextProps.currentScene) {
      const { title, description } = nextProps.currentProject

      this.setState({ title, description })
    }
  }

  handleSubmit = () => {
    const { title, description, cols, rows } = this.state
    const { currentProject, onSave, onClose } = this.props

    if (currentProject) {
      const layout: Layout = { cols, rows }
      const newProject: Partial<Project> = {
        title,
        description,
        layout: layout,
        parcels: getBlockchainParcelsFromLayout(layout)
      }

      onSave(currentProject.id, newProject)
    }
    onClose()
  }

  handleLayoutChange = (projectLayout: ProjectLayout) => {
    this.setState({ ...projectLayout })
  }

  handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ title: event.currentTarget.value })
  }

  handleDescriptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ description: event.currentTarget.value })
  }

  render() {
    const { name, onClose } = this.props
    const { title, description } = this.state
    const { rows, cols, hasError } = this.state

    return (
      <Modal name={name}>
        <Form onSubmit={this.handleSubmit}>
          <Modal.Header>{t('edit_project_modal.title')}</Modal.Header>
          <Modal.Content>
            <div className="details">
              <ProjectFields.Title value={title} onChange={this.handleTitleChange} required />
              <ProjectFields.Description value={description} onChange={this.handleDescriptionChange} />

              <div className="picker">
                <Header sub className="picker-label">
                  {t('edit_project_modal.custom_layout_label')}
                </Header>
                <ProjectLayoutPicker rows={rows} cols={cols} onChange={this.handleLayoutChange} />
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button primary disabled={hasError}>
              {t('global.save')}
            </Button>
            <Button secondary onClick={onClose}>
              {t('global.cancel')}
            </Button>
          </Modal.Actions>
        </Form>
      </Modal>
    )
  }
}
