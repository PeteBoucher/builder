import { Dispatch } from 'redux'
import { navigateTo, NavigateToAction } from 'decentraland-dapps/dist/modules/location/actions'

import { ProjectState } from 'modules/project/reducer'
import { createProjectFromTemplate, CreateProjectFromTemplateAction } from 'modules/project/actions'
import { openModal, OpenModalAction } from 'decentraland-dapps/dist/modules/modal/actions'

export type Props = {
  projects: ProjectState['data']
  onOpenModal: typeof openModal
  onProjectClick: typeof navigateTo
  onCreateProject: typeof createProjectFromTemplate
}

export type MapStateProps = Pick<Props, 'projects'>
export type MapDispatchProps = Pick<Props, 'onOpenModal' | 'onProjectClick' | 'onCreateProject'>
export type MapDispatch = Dispatch<OpenModalAction | NavigateToAction | CreateProjectFromTemplateAction>
