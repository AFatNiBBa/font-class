
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dove` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dove?s=sharp-duotone-solid dove}
 * @preview ![dove](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQzMmw4MCA2NCA4MCAxNiA3Ni44LTY0IDgzLjIgMGM4OC40IDAgMTYwLTcxLjYgMTYwLTE2MGwwLTE2OCAzMi01Nkw0MDAgNjRjLTQ0LjIgMC04MCAzNS44LTgwIDgwbDAgMzAuNSAwIDMzLjVjLTQzLjEtMy42LTExOC4xLTI0LjEtMTcwLjMtNzYuMkMxMjQuMyAxMDYuNSAxMDQuNCA3My44IDk2IDMyYy0xLjcgMi42LTQuNSA2LjEtOC4xIDEwLjRDNjkuNiA2NS4xIDMyIDExMS41IDMyIDE3NmMwIDEyMC42IDg1LjIgMTg0LjQgMTIxLjggMjA0LjdMMCA0MzJ6TTQxNiAxNDRhMTYgMTYgMCAxIDEgLTMyIDAgMTYgMTYgMCAxIDEgMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzNi44IDIuOGMtMTguMSAxNS42LTY4LjMgNTguOC04Ni45IDEyOC4zbC0uMiAuN0MyMDEuOSAxODMuOSAyNzYuOSAyMDQuNCAzMjAgMjA4bDAtMzMuNUMyNzQuMyAxMzMuMSAyMzUuMiA3My45IDI0MCAwYy0uOSAuOC0yIDEuNy0zLjIgMi44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Dove: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 432l80 64 80 16 76.8-64 83.2 0c88.4 0 160-71.6 160-160l0-168 32-56L400 64c-44.2 0-80 35.8-80 80l0 30.5 0 33.5c-43.1-3.6-118.1-24.1-170.3-76.2C124.3 106.5 104.4 73.8 96 32c-1.7 2.6-4.5 6.1-8.1 10.4C69.6 65.1 32 111.5 32 176c0 120.6 85.2 184.4 121.8 204.7L0 432zM416 144a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
            <path d="M236.8 2.8c-18.1 15.6-68.3 58.8-86.9 128.3l-.2 .7C201.9 183.9 276.9 204.4 320 208l0-33.5C274.3 133.1 235.2 73.9 240 0c-.9 .8-2 1.7-3.2 2.8z" />
    </Icon>
);

export default Dove;