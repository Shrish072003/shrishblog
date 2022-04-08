import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://shrish-sunder.ghost.io',
    key: '94ae04b4192b93702405f41f7d',
    version: "v2"
  });

  export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all",
            include: "tags,authors"
        })
        .catch(err => {
            console.error(err);
        })
}

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug
        })
        .catch(err => {
            console.error(err);
        })
}

export async function getPage(pageSlug) {
    return await api.pages
        .read({
            slug: pageSlug
        })
        .catch(err => {
            console.error(err);
        })
}