<template>
  <div> 
    <v-data-table
      :headers="headers"
      :items="AppData.items"
      item-key="name"
      :total-items="100"
      class="elevation-1"
      :server-items-length="totalDesserts"
      :options.sync="options"
    >
      <!-- :total-items="AppData.pageInfo.totalResults" -->
      <template v-slot:item.actions="{ item }">
        <img
          :src="item.snippet.thumbnails.default.url"
          target="_blank"
          style="padding-left: 10px; width: 100px"
        />
      </template>
    </v-data-table> 
  </div>
</template>

<script>
export default {
  name: "InspirePage",
  data() {
    return {
      totalDesserts: 0,
      pagecount: 1,
      AppData: [],
      options: {},
      headers: [
        { text: "標題", value: "snippet.title" },
        { text: "publishedAt", value: "snippet.publishedAt" },
        { text: "etag", value: "videoInfo.items[0].statistics.viewCount" },
        { text: "預覽圖", value: "actions" },
      ],
    };
  },
  created() {
    this.GetData({});
  },
  watch: {
    options: {
      handler(e) {
        this.GetData(e);
      },
      deep: true,
    },
  },
  updated() { 
    // 讓我們可以知道組件有被更新 
    // console.log('view updated') 
    },
  methods: {
    async GetData(e) {
      let pageToken = this.AppData.nextPageToken;
      let prevPageToken = this.AppData.prevPageToken;
      let url =
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId=UUMUnInmOkrWN4gof9KlhNmQ&key=我是API&maxResults=10";
      if (e && e.page > this.pagecount) {
        url = url + "&pageToken=" + pageToken;
      } else if (e && e.page < this.pagecount) {
        url = url + "&pageToken=" + prevPageToken;
      }
      this.pagecount = e.page;
      // console.log("1")
      this.$axios({
        url: url,
        method: "get",
      })
        .then((resp) => {
          // console.log("2")
          
          resp.data.items.forEach((Element) => {
            this.GetVideo(Element.contentDetails.videoId).then((value) => { 
              this.$set(Element,'videoInfo',value)
            });
          });
          
          
          // console.log("3")
          this.AppData = {...resp.data}; 
          this.totalDesserts = this.AppData.pageInfo.totalResults;  
        })
        .catch((err) => {
          console.log(err);
        });
        // console.log("4")  
    },
    async GetVideo(vid) {
      let VData;

      return new Promise((res, rej) => {
        this.$axios({
          url:
            "https://www.googleapis.com/youtube/v3/videos?key=我是API&&part=statistics&id=" +
            vid,
          method: "get",
        })
          .then((resp) => {
            res(resp.data);
          })
          .catch((err) => {
            console.log(err);
            rej(err);
          });

        return VData;
      });
    },
 
  },
};
</script>

