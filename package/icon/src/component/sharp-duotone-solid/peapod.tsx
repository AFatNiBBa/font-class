
import { Icon, generic } from "../../index";

/**
 * A component that renders the `peapod` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peapod?s=sharp-duotone-solid peapod}
 * @preview ![peapod](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04OCAzNjhhNTYgNTYgMCAxIDAgMTEyIDBBNTYgNTYgMCAxIDAgODggMzY4ek0yMDAgMjU2YTU2IDU2IDAgMSAwIDExMiAwIDU2IDU2IDAgMSAwIC0xMTIgMHpNMzEyIDE0NGE1NiA1NiAwIDEgMCAxMTIgMCA1NiA1NiAwIDEgMCAtMTEyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMEw0MTYgMEMxODYuMiAwIDAgMTg2LjIgMCA0MTZsMCA5NiA5NiAwYzIyOS44IDAgNDE2LTE4Ni4yIDQxNi00MTZsMC05NnpNMjU2IDIwMGE1NiA1NiAwIDEgMSAwIDExMiA1NiA1NiAwIDEgMSAwLTExMnpNODggMzY4YTU2IDU2IDAgMSAxIDExMiAwQTU2IDU2IDAgMSAxIDg4IDM2OHpNMzY4IDg4YTU2IDU2IDAgMSAxIDAgMTEyIDU2IDU2IDAgMSAxIDAtMTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Peapod: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M88 368a56 56 0 1 0 112 0A56 56 0 1 0 88 368zM200 256a56 56 0 1 0 112 0 56 56 0 1 0 -112 0zM312 144a56 56 0 1 0 112 0 56 56 0 1 0 -112 0z" />
            <path d="M512 0L416 0C186.2 0 0 186.2 0 416l0 96 96 0c229.8 0 416-186.2 416-416l0-96zM256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM88 368a56 56 0 1 1 112 0A56 56 0 1 1 88 368zM368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </Icon>
);

export default Peapod;