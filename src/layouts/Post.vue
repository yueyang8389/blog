<template>
  <div class="post">
    <transition appear name="zoomIn">
      <article class="article">
        <PostHeader/>
        <Toc/>
        <Content/>
        <PostFooter/>
      </article>
    </transition>

    <section class="comment" v-if="useVssue">
      <Vssue :title="vssueTitle" :issue-id="vssueId"/>
    </section>
  </div>
</template>

<script>
import PostHeader from '../components/post/PostHeader';
import PostFooter from '../components/post/PostFooter';
import Toc from '../components/post/Toc';

export default {
  name: 'Post',
  components: {
    PostHeader,
    PostFooter,
    Toc
  },
  computed: {
    vssueTitle() {
      return this.$frontmatter['vssue-title'] || this.$frontmatter.title;
    },

    vssueId() {
      return this.$frontmatter['vssue-id'];
    },

    useVssue() {
      return (
        this.$themeConfig.comments &&
        (this.vssueTitle || this.vssueId) &&
        this.$frontmatter.vssue !== false
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
.post {
  max-width: 1000px;

  .article {
    widget();
    overflow: hidden;
    border-radius: 0 0 $baseRadius $baseRadius;
  }

  .content, .post-footer {
    margin: 0 spacer(6);
  }

  .content {
    margin-top: spacer(3);
  }

  .comment {
    widget();
    margin-top: spacer(3);
    padding: spacer(1.5);
  }

  .zoomIn-enter-active {
    transform-origin: top center;
    animation: zoomIn 450ms ease-in-out;
  }

  @media (max-width: $MQMobile) {
    .content, .post-footer {
      margin: 0 spacer(2);
    }
  }
}
</style>
