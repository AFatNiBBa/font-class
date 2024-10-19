
import { Icon } from "../../index";

/**
 * A component that renders the `shower-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shower-down?s=thin shower-down}
 * @preview ![shower-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDM5Yy42LTIxLjYgMTguMi0zOSA0MC0zOWwxNiAwYzIxLjcgMCAzOS40IDE3LjMgNDAgMzljNjkuNCAyMC42IDEyMCA4NC45IDEyMCAxNjFsMCAyNCAxNiAwYzQuNCAwIDggMy42IDggOHMtMy42IDgtOCA4bC0yNCAwTDMyIDI0MCA4IDI0MGMtNC40IDAtOC0zLjYtOC04czMuNi04IDgtOGwxNiAwIDAtMjRDMjQgMTIzLjkgNzQuNiA1OS42IDE0NCAzOXpNMzQ0IDIwMGMwLTcwLjgtNDguNC0xMzAuMy0xMTQtMTQ3LjJjLTMuNS0uOS02LTQuMS02LTcuN2wwLTVjMC0xMy4zLTEwLjctMjQtMjQtMjRsLTE2IDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0bDAgNWMwIDMuNy0yLjUgNi44LTYgNy43Qzg4LjQgNjkuNyA0MCAxMjkuMiA0MCAyMDBsMCAyNCAzMDQgMCAwLTI0ek0yNDEuNCA0NzJjLS45IDIuMS0xLjQgNC40LTEuNCA2LjhsMCAxLjJjMCA4LjggNy4yIDE2IDE2IDE2czE2LTcuMiAxNi0xNmwwLTEuMmMwLTIuMy0uNS00LjYtMS40LTYuOEwyNTYgNDM4IDI0MS40IDQ3MnptLTE0LjctNi4zbDE4LjItNDIuNGMxLjktNC41IDYuMy03LjQgMTEuMi03LjRzOS4yIDIuOSAxMS4yIDcuNGwxOC4yIDQyLjRjMS44IDQuMSAyLjcgOC42IDIuNyAxMy4xbDAgMS4yYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMS4yYzAtNC41IC45LTguOSAyLjctMTMuMXpNMzIwIDMxMEwzMDUuNCAzNDRjLS45IDIuMS0xLjQgNC40LTEuNCA2LjhsMCAxLjJjMCA4LjggNy4yIDE2IDE2IDE2czE2LTcuMiAxNi0xNmwwLTEuMmMwLTIuMy0uNS00LjYtMS40LTYuOEwzMjAgMzEwem0tMTEuMi0xNC42YzEuOS00LjUgNi4zLTcuNCAxMS4yLTcuNHM5LjIgMi45IDExLjIgNy40bDE4LjIgNDIuNGMxLjggNC4xIDIuNyA4LjYgMi43IDEzLjFsMCAxLjJjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0xLjJjMC00LjUgLjktOC45IDIuNy0xMy4xbDE4LjItNDIuNHpNMTEzLjQgNDcyYy0uOSAyLjEtMS40IDQuNC0xLjQgNi44bDAgMS4yYzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZsMC0xLjJjMC0yLjMtLjUtNC42LTEuNC02LjhMMTI4IDQzOCAxMTMuNCA0NzJ6bS0xNC43LTYuM2wxOC4yLTQyLjRjMS45LTQuNSA2LjMtNy40IDExLjItNy40czkuMiAyLjkgMTEuMiA3LjRsMTguMiA0Mi40YzEuOCA0LjEgMi43IDguNiAyLjcgMTMuMWwwIDEuMmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTEuMmMwLTQuNSAuOS04LjkgMi43LTEzLjF6TTE5MiAzMTBMMTc3LjQgMzQ0Yy0uOSAyLjEtMS40IDQuNC0xLjQgNi44bDAgMS4yYzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZsMC0xLjJjMC0yLjMtLjUtNC42LTEuNC02LjhMMTkyIDMxMHptLTExLjItMTQuNmMxLjktNC41IDYuMy03LjQgMTEuMi03LjRzOS4yIDIuOSAxMS4yIDcuNGwxOC4yIDQyLjRjMS44IDQuMSAyLjcgOC42IDIuNyAxMy4xbDAgMS4yYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMS4yYzAtNC41IC45LTguOSAyLjctMTMuMWwxOC4yLTQyLjR6TTQ5LjQgMzQ0Yy0uOSAyLjEtMS40IDQuNC0xLjQgNi44bDAgMS4yYzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZsMC0xLjJjMC0yLjMtLjUtNC42LTEuNC02LjhMNjQgMzEwIDQ5LjQgMzQ0em0tMTQuNy02LjNsMTguMi00Mi40YzEuOS00LjUgNi4zLTcuNCAxMS4yLTcuNHM5LjIgMi45IDExLjIgNy40bDE4LjIgNDIuNGMxLjggNC4xIDIuNyA4LjYgMi43IDEzLjFsMCAxLjJjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0xLjJjMC00LjUgLjktOC45IDIuNy0xMy4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ShowerDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 39c.6-21.6 18.2-39 40-39l16 0c21.7 0 39.4 17.3 40 39c69.4 20.6 120 84.9 120 161l0 24 16 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0L32 240 8 240c-4.4 0-8-3.6-8-8s3.6-8 8-8l16 0 0-24C24 123.9 74.6 59.6 144 39zM344 200c0-70.8-48.4-130.3-114-147.2c-3.5-.9-6-4.1-6-7.7l0-5c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24l0 5c0 3.7-2.5 6.8-6 7.7C88.4 69.7 40 129.2 40 200l0 24 304 0 0-24zM241.4 472c-.9 2.1-1.4 4.4-1.4 6.8l0 1.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-1.2c0-2.3-.5-4.6-1.4-6.8L256 438 241.4 472zm-14.7-6.3l18.2-42.4c1.9-4.5 6.3-7.4 11.2-7.4s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1zM320 310L305.4 344c-.9 2.1-1.4 4.4-1.4 6.8l0 1.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-1.2c0-2.3-.5-4.6-1.4-6.8L320 310zm-11.2-14.6c1.9-4.5 6.3-7.4 11.2-7.4s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1l18.2-42.4zM113.4 472c-.9 2.1-1.4 4.4-1.4 6.8l0 1.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-1.2c0-2.3-.5-4.6-1.4-6.8L128 438 113.4 472zm-14.7-6.3l18.2-42.4c1.9-4.5 6.3-7.4 11.2-7.4s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1zM192 310L177.4 344c-.9 2.1-1.4 4.4-1.4 6.8l0 1.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-1.2c0-2.3-.5-4.6-1.4-6.8L192 310zm-11.2-14.6c1.9-4.5 6.3-7.4 11.2-7.4s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1l18.2-42.4zM49.4 344c-.9 2.1-1.4 4.4-1.4 6.8l0 1.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-1.2c0-2.3-.5-4.6-1.4-6.8L64 310 49.4 344zm-14.7-6.3l18.2-42.4c1.9-4.5 6.3-7.4 11.2-7.4s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1z" />
    </Icon>
);

export default ShowerDown;