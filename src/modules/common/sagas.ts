import { all } from 'redux-saga/effects'
import { locationSaga } from 'decentraland-dapps/dist/modules/location/sagas'
import { analyticsSaga } from 'decentraland-dapps/dist/modules/analytics/sagas'

import { walletSaga } from 'modules/wallet/sagas'
import { translationSaga } from 'modules/translation/sagas'
import { assetPackSaga } from 'modules/assetPack/sagas'
import { contestSaga } from 'modules/contest/sagas'
import { modalSaga } from 'modules/modal/sagas'
import { sceneSaga } from 'modules/scene/sagas'
import { projectSaga } from 'modules/project/sagas'
import { userSaga } from 'modules/user/sagas'
import { editorSaga } from 'modules/editor/sagas'
import { keyboardSaga } from 'modules/keyboard/sagas'
import { segmentSaga } from 'modules/analytics/sagas'

export function* rootSaga() {
  yield all([
    segmentSaga(),
    locationSaga(),
    analyticsSaga(),
    translationSaga(),
    walletSaga(),
    assetPackSaga(),
    contestSaga(),
    modalSaga(),
    sceneSaga(),
    projectSaga(),
    userSaga(),
    editorSaga(),
    keyboardSaga()
  ])
}
