import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1. 正确定义异步action（并导出）
export const fetchData = createAsyncThunk("home/fetchData", async (extrainfo,{dispatch,getState}) => {
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  const banners=res.data.data.banners.list
  const recommend=res.data.data.recommend.list
  dispatch(getBanners(banners))
  dispatch(getRecommend(recommend))
  return res.data // 返回完整数据，在fulfilled中处理
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommend: [],
    loading: false, // 建议添加loading状态
    error: null
  },
  reducers: {
    // 同步action保持不变
    getBanners(state, { payload }) {
      state.banners = payload
    },
    getRecommend(state, { payload }) {
      state.recommend = payload
    }
  },
  // 2. 改用builder callback语法
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        // 在这里处理返回的数据
        state.banners = action.payload.data?.banners?.list || []
        state.recommend = action.payload.data?.recommend?.list || []
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

// 导出所有需要的action
export const { getBanners, getRecommend } = homeSlice.actions
export default homeSlice.reducer