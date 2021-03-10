import { css } from '@emotion/core'
import SplitBanner from 'components/SplitBanner/SplitBanner'
import { PostListBlock } from 'lib/models/postListBlock'
import { PostListItem } from 'lib/models/postListItem'
import Link from 'next/link'
import { transparentize } from 'polished'
import { colors, layout } from 'style'

const postPreviewStyle = css`
  ${layout.container};
  margin-top: 20px;
`

const callToActionStyle = css`
  font-weight: bold;
  color: inherit;
`

function PostPreview(props: PostListItem) {
  return (
    <SplitBanner
      title={props.title}
      image={{ url: props._embedded?.['wp:featuredmedia'][0].source_url || '' }}
      color={transparentize(0.15, colors.beige)}
    >
      <p>{props.excerpt}</p>
      <p>
        <Link href={`/blog/posts/${props.slug}`} passHref>
          <a css={callToActionStyle}>read article</a>
        </Link>
      </p>
    </SplitBanner>
  )
}

export default function PostList(props: PostListBlock) {
  return (
    <section>
      {props.posts.map((post) => (
        <article key={post.slug} css={postPreviewStyle}>
          <PostPreview {...post} />
        </article>
      ))}
    </section>
  )
}
