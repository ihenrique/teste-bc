export const state = () => ({
    term: ''
})
  
export const mutations = {
    update (state , term) {
        state.term = term
    }
}
