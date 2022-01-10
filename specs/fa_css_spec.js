const test = require('ava')
const getSandbox = require('./support/sandbox')
const {process} = require('hexo-test-utils/core')
const {contentFor, mockConfig} = require('hexo-test-utils')

const sandbox = getSandbox()

test('renders css in theme', async function (t) {
  const ctx = await sandbox({fixtureName: 'fa-css-theme'})

  const Post = ctx.model('Post');
  await Post.insert({source: 'foo', slug: 'foo'})
  await process(ctx)

  const content = await contentFor(ctx, '/foo/index.html')
  const html = content.toString()

  t.true(html.includes('.svg-inline--fa'))
  t.false(html.includes('<style>'))
})

test('renders css in post', async function (t) {
  const ctx = await sandbox({fixtureName: 'fa-css-post'})

  await process(ctx)

  const content = await contentFor(ctx, '/foo/index.html')
  const html = content.toString()

  t.true(html.includes('.svg-inline--fa'))
  t.true(html.includes('<style>'))
})
