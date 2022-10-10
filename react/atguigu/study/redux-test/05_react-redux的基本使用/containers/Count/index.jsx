// 容器组件

import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'
import { INCREMENT, DECREMENT } from '../../redux/constant'

import CountUI from '../../components/Count'

// mapDispatchToProps 操作状态的方法
// 一般写法
const mapDispatchToProps = dispatch => ({
  [INCREMENT](number) {
    dispatch(createIncrementAction(number))
  },
  [DECREMENT](number) {
    dispatch(createDecrementAction(number))
  },
  incrementAsync(number, delay) {
    dispatch(createIncrementAsyncAction(number, delay))
  }
})
// 创建并暴露一个Count的容器组件
export default connect(
  state => ({
    count: state
  }),
  {
    [INCREMENT]: createIncrementAction,
    [DECREMENT]: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(CountUI)
