import api from '@/api'
import type { CreateChallengeRequest } from '@/models/challengeModel'

const challengeAPI = {
  getChallenges: async () => {
    const response = await api.get('/api/v1/challenges')
    return response.data
  },
  getChallenge: async (challengeId: string) => {
    const response = await api.get(`/api/v1/challenge/${challengeId}`)
    return response.data
  },
  createChallenge: async (challenge: CreateChallengeRequest) => {
    console.log('전송할 챌린지 데이터:', JSON.stringify(challenge, null, 2));
    const response = await api.post('/api/v1/challenge', challenge)
    return response.data
  },
  deleteChallenge: async (challengeId: string) => {
    const response = await api.delete(`/api/v1/challenge/${challengeId}`)
    return response.data
  }
}
export default challengeAPI
