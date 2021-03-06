import * as React from 'react'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Container } from 'decentraland-ui'

import HomePageBanner from 'components/Banners/HomePageBanner'
import HomePageHero from 'components/HomePageHero'
import ProjectCard from 'components/ProjectCard'
import TemplateCard from 'components/TemplateCard'
import { getTemplates } from 'modules/template/utils'
import { Template } from 'modules/template/types'

import { Props, State, DefaultProps } from './HomePage.types'
import './HomePage.css'

export default class HomePage extends React.PureComponent<Props, State> {
  static defaultProps: DefaultProps = {
    projects: {}
  }

  state = {
    isAnimationPlaying: false
  }

  handleTemplateClick = (template: Template) => {
    if (template.custom) {
      this.props.onOpenModal('CustomLayoutModal')
    } else {
      this.props.onCreateProject(template)
    }
  }

  handleStart = () => {
    this.setState({ isAnimationPlaying: true })
    document.getElementById('template-cards')!.scrollIntoView()
    setTimeout(() => {
      this.setState({ isAnimationPlaying: false })
    }, 2000)
  }

  handleWatchVideo = () => {
    this.props.onOpenModal('VideoModal')
  }

  render() {
    const { isAnimationPlaying } = this.state
    const projects = Object.values(this.props.projects)
    const templates = getTemplates()
    return (
      <>
        {!projects.length ? (
          <HomePageHero onWatchVideo={this.handleWatchVideo} onStart={this.handleStart} />
        ) : (
          <div className="home-page-divider" />
        )}
        <HomePageBanner className="home-page-banner" />
        <Container>
          <div className="HomePage">
            {projects.length > 0 && (
              <div className="project-cards">
                <div className="subtitle">{t('home_page.projects_title')}</div>
                <div className="CardList">
                  {projects
                    .sort(project => -project.createdAt)
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </div>
            )}

            <div id="template-cards" className={'template-cards' + (isAnimationPlaying ? ' animate' : '')}>
              <div className="subtitle">{t('home_page.templates_title')}</div>
              <div className="template-list">
                <div className="template-row">
                  <TemplateCard template={templates[0]} onClick={this.handleTemplateClick} />
                  <TemplateCard template={templates[1]} onClick={this.handleTemplateClick} />
                </div>
                <div className="template-row">
                  <TemplateCard template={templates[2]} onClick={this.handleTemplateClick} />
                  <TemplateCard template={templates[3]} onClick={this.handleTemplateClick} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    )
  }
}
