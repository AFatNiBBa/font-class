
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pear?s=sharp-duotone-solid pear}
 * @preview ![pear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMEMwIDQyNiA4NiA1MTIgMTkyIDUxMnMxOTItODYgMTkyLTE5MmMwLTMuNi0uMS03LjEtLjMtMTAuN2w1OC44LTU4LjhjNDQuMi00NC4yIDQ5LjMtMTEyLjYgMTUuNC0xNjIuNWMtOC4zIDguMy0xNi42IDE2LjYtMjQuOSAyNC45Yy01LjcgNS43LTExLjMgMTEuMy0xNyAxN2MtMTEuMy0xMS4zLTIyLjYtMjIuNi0zMy45LTMzLjljNS43LTUuNyAxMS4zLTExLjMgMTctMTdjOC4zLTguMyAxNi42LTE2LjYgMjQuOS0yNC45QzQwMi4zIDM5LjQgMzc3LjIgMzIgMzUyIDMyYy0zMi44IDAtNjUuNSAxMi41LTkwLjUgMzcuNWwtNTguOCA1OC44Yy0zLjUtLjItNy4xLS4zLTEwLjctLjNDODYgMTI4IDAgMjE0IDAgMzIwem0xOTIgOTZjNTMgMCA5Ni00MyA5Ni05NmwzMiAwYzAgNzAuNy01Ny4zIDEyOC0xMjggMTI4bDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTAuNyAzNS4ybC0xNyAxN0w0MzMgMTEzbC0xNyAxN0wzODIuMSA5NmwxNy0xNyA2MC44LTYwLjggMTctMTcgMzMuOSAzMy45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320C0 426 86 512 192 512s192-86 192-192c0-3.6-.1-7.1-.3-10.7l58.8-58.8c44.2-44.2 49.3-112.6 15.4-162.5c-8.3 8.3-16.6 16.6-24.9 24.9c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c8.3-8.3 16.6-16.6 24.9-24.9C402.3 39.4 377.2 32 352 32c-32.8 0-65.5 12.5-90.5 37.5l-58.8 58.8c-3.5-.2-7.1-.3-10.7-.3C86 128 0 214 0 320zm192 96c53 0 96-43 96-96l32 0c0 70.7-57.3 128-128 128l0-32z" />
            <path d="M510.7 35.2l-17 17L433 113l-17 17L382.1 96l17-17 60.8-60.8 17-17 33.9 33.9z" />
    </Icon>
);

export default Pear;