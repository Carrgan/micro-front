import fs from "fs";
import path from "path";

export default function Nav({pages}: { pages: string[] }) {
    console.log(pages)
    return <div>Nav</div>
}

function getPages(dir: string) {
    const files = fs.readdirSync(dir);

    console.log(files)
    return files.reduce((pages, file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            pages = pages.concat(getPages(filePath));
        } else if (file.endsWith('.tsx') && !['_app.js', '_document.js'].includes(file)) {
            const pageName = file.replace('.tsx', '');
            const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);
            pages.push({ title, path: `/${pageName}` });
        }

        return pages;
    }, [] as any);
}

export async function getStaticProps() {
    const pagesDir = path.join(process.cwd(), 'src/pages');
    const pages = getPages(pagesDir);
    return {
        props: {
            pages,
        }
    };
}

// export const Props = await getStaticProps();