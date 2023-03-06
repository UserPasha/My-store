import React, {useEffect, useState} from 'react';
import style from './BreadCrumbs.module.scss'
import {useRouter} from "next/router";
import Link from "next/link";

const convertBreadcrumb = (string:string) => {
    return string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü')
        .toUpperCase();
};

interface ICrumb
{ breadcrumb: string
    href: string; }


export const BreadCrumbs = () => {

    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState<ICrumb[] | null>(null);


    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                console.log(`path: ${path}, linkPath: ${linkPath}`)
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            setBreadcrumbs(pathArray);

        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <nav aria-label="breadcrumbs">
            <ol className={style.ol}>
                <li>
                    <a href="/">HOME/</a>
                </li>
                {breadcrumbs.map((breadcrumb, i) => {
                    return (
                        <li key={breadcrumb.href}>
                            <Link href={breadcrumb.href} legacyBehavior>
                                <a  className={style.one}>
                                    {`${convertBreadcrumb(breadcrumb.breadcrumb)}/`}
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
//         <div>
// 4-41-43
//         </div>
    );
};

