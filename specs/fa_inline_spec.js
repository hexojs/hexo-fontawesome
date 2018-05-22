import test from 'ava'
import getSandbox from './support/sandbox'
import {process} from 'hexo-test-utils/core'
import {contentFor, mockConfig} from 'hexo-test-utils'

const sandbox = getSandbox()

test('renders svg in theme', async function (t) {
  const ctx = await sandbox({fixtureName: 'fa-inline-theme'})

  const Post = ctx.model('Post');
  await Post.insert({source: 'foo', slug: 'foo', icon: 'twitter', prefix: 'fab'})
  await process(ctx)

  const content = await contentFor(ctx, '/foo/index.html')
  const svg = content.toString()

  t.true(svg.includes('data-icon="twitter"'))
  t.true(svg.includes('fa-twitter'))
  t.true(svg.includes('data-prefix="fab"'))
})

test('renders svg with fas prefix in theme', async function (t) {
  const ctx = await sandbox({fixtureName: 'fa-inline-theme'})

  const Post = ctx.model('Post');
  await Post.insert({source: 'foo', slug: 'foo', icon: 'arrow-circle-left', prefix: 'fas'})
  await process(ctx)

  const content = await contentFor(ctx, '/foo/index.html')
  const svg = content.toString()

  t.true(svg.includes('data-icon="arrow-circle-left"'))
  t.true(svg.includes('fa-arrow-circle-left'))
  t.true(svg.includes('data-prefix="fas"'))
})

test('renders svg with fa prefix in theme', async function (t) {
  const ctx = await sandbox({fixtureName: 'fa-inline-theme'})

  const Post = ctx.model('Post');
  await Post.insert({source: 'foo', slug: 'foo', icon: 'arrow-circle-left', prefix: 'fa'})
  await process(ctx)

  const content = await contentFor(ctx, '/foo/index.html')
  const svg = content.toString()

  t.true(svg.includes('data-icon="arrow-circle-left"'))
  t.true(svg.includes('fa-arrow-circle-left'))
  t.true(svg.includes('data-prefix="fa"'))
})


test('renders svg in post', async function (t) {
  const ctx = await sandbox({fixtureName: 'fa-inline-post'})

  await process(ctx)

  const content = await contentFor(ctx, '/twitter/index.html')
  const svg = content.toString()

  t.true(svg.includes('data-icon="twitter"'))
  t.true(svg.includes('fa-twitter'))
  t.true(svg.includes('data-prefix="fab"'))
})

test('renders svg with fas prefix in post', async function (t) {
  const ctx = await sandbox({fixtureName: 'fa-inline-post'})

  await process(ctx)

  const content = await contentFor(ctx, '/arrow-solid/index.html')
  const svg = content.toString()

  t.true(svg.includes('data-icon="arrow-circle-left"'))
  t.true(svg.includes('fa-arrow-circle-left'))
  t.true(svg.includes('data-prefix="fas"'))
})

test('renders svg with fa prefix in post', async function (t) {
  const ctx = await sandbox({fixtureName: 'fa-inline-post'})

  await process(ctx)

  const content = await contentFor(ctx, '/arrow/index.html')
  const svg = content.toString()

  t.true(svg.includes('data-icon="arrow-circle-left"'))
  t.true(svg.includes('fa-arrow-circle-left'))
  t.true(svg.includes('data-prefix="fa"'))
})
