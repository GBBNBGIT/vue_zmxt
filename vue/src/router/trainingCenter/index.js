import Layout from '@/views/layout/layout';
const trainingcCenter = {
  path: '/trainingCenter',
  name: 'trainingCenter',
  redirect: '/trainingCenter/training',
  meta: {
    title: '培训中心',
  },
  component: Layout,
  children: [
    {
      path: 'training',
      name: 'training',
      meta: {
        title: '培训',
      },
      component: () =>
        import('@/views/trainingCenter/training/index.vue')
    },
    {
      path: 'collectTopic',
      name: 'collectTopic',
      meta: {
        title: '收藏题目',
      },
      component: () =>
        import('@/views/trainingCenter/training/collectTopic.vue')
    },
    {
      path: 'evaluateView',
      name: 'evaluateView',
      meta: {
        title: '评价',
      },
      component: () =>
        import('@/views/trainingCenter/training/evaluateView.vue')
    },
  ]
}

export default trainingcCenter