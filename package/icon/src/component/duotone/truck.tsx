
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck?s=duotone truck}
 * @preview ![truck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA0MzJhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgOTYgNDMyem0yODggMGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00OCAwQzIxLjUgMCAwIDIxLjUgMCA0OEwwIDM2OGMwIDI2LjUgMjEuNSA0OCA0OCA0OGwxNy4xIDBjNy44LTU0LjMgNTQuNC05NiAxMTAuOS05NnMxMDMuMSA0MS43IDExMC45IDk2bDY2LjMgMGM3LjgtNTQuMyA1NC40LTk2IDExMC45LTk2czEwMy4xIDQxLjcgMTEwLjkgOTZsMS4xIDAgMzIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwwLTY0IDAtMzIgMC0xOC43YzAtMTctNi43LTMzLjMtMTguNy00NS4zTDUxMiAxMTQuN2MtMTItMTItMjguMy0xOC43LTQ1LjMtMTguN0w0MTYgOTZsMC00OGMwLTI2LjUtMjEuNS00OC00OC00OEw0OCAwek00MTYgMTYwbDUwLjcgMEw1NDQgMjM3LjNsMCAxOC43LTEyOCAwIDAtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Truck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l17.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l66.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l1.1 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96z" />
    </Icon>
);

export default Truck;