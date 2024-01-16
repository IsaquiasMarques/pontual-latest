import { PostsModel } from "@core/base-models/posts.model";

export function transformWPDataFormatIntoLocalDataFormat(WPData: any[]): PostsModel[]{

    let tranformedPosts: PostsModel[] = [];
    WPData.forEach((element: any) => {
        tranformedPosts.push({
            id: element.id,
            imagePath: element.images_size_custom,
            title: element.title.rendered,
            slug: element.slug,
            categories: element.categories,
            highlightDescription: element.highlightDescription ?? element.excerpt.rendered,
            created_at: element.posted_at,
            // author: element.custom_author,
            author: element.acf?.escritor_do_artigo ?? element.escritor_do_artigo,
            read_time: element.acf?.tempo_de_leitura ?? '',
            fullDescription: element.content?.rendered ?? ''
        });
    });
    return tranformedPosts;
    
}