<template>
    <div class="mavonEditor">
      <mavon-editor
        class="editorClass"
        ref="md"
        v-model="value"
        :subfield="subfield"
        :boxShadow="boxShadow"
        :defaultOpen="defaultOpen"
        :toolbarsFlag="toolbarsFlag"
      />
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      data() {
        return {
          value: '',
          boxShadow: false,
          toolbarsFlag: false,
          subfield: false,
          defaultOpen: 'preview'
        }
      },
      computed: {
        ...mapGetters([
          'article'
        ])
      },
      mounted(){
        this.getContent(this.article);
      },
      methods:{
        getContent(article){
          this.value = article.content;
        }
      }
    }
</script>

<style scoped>
  .mavonEditor {
    width: 100%;
    height: 100%;
  }
  .editorClass {
    width: 100%;
    height: 98%;
  }
</style>
