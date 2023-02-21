import { connect } from 'react-redux';
import Quiz from './quiz';
import ActionTypes from '../../redux/constants/action-types';

const mapStateToProps = ({ questions, loading, errors }) => ({
  questions,
  loading: loading.some(x => x.action === 'LOAD_QUESTIONS'),
  hasError: errors.some(x => x.action === 'LOAD_QUESTIONS'),
});

const mapDispatchToProps = dispatch => ({
  loadQuestions: () =>
    dispatch({
      type: ActionTypes.LOAD_QUESTIONS_REQUEST,
      payload: {
        url: 'questions',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),

  addResult: data =>
    dispatch({
      type: ActionTypes.ADD_RESULTS_REQUEST,
      payload: {
        url: 'results',
        method: 'post',
        data,
      },
      meta: {
        loadingId: data.productId,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
