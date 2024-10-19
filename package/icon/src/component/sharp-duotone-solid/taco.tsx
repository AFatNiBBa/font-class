
import { Icon, generic } from "../../index";

/**
 * A component that renders the `taco` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taco?s=sharp-duotone-solid taco}
 * @preview ![taco](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGMwLTQ3LjcgMTMtOTIuMyAzNS43LTEzMC41QzgwLjQgMjQyLjMgMTYyLjMgMTkyIDI1NiAxOTJzMTc1LjYgNTAuMyAyMjAuMyAxMjUuNUM0OTkgMzU1LjcgNTEyIDQwMC4zIDUxMiA0NDhsMCAzMkwwIDQ4MGwwLTMyem05Ni00OGExNiAxNiAwIDEgMCAzMiAwIDE2IDE2IDAgMSAwIC0zMiAwem02NC02NGExNiAxNiAwIDEgMCAzMiAwIDE2IDE2IDAgMSAwIC0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDMybDY5LjkgNTQuMSA4OC4zLTIuNyAyNC43IDg0LjlMNTEyIDIxOGwtMzUuNyA5OS41QzQzMS42IDI0Mi4zIDM0OS43IDE5MiAyNTYgMTkycy0xNzUuNiA1MC4zLTIyMC4zIDEyNS41TDAgMjE4bDczLjEtNDkuN0w5Ny44IDgzLjRsODguMyAyLjdMMjU2IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Taco: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448c0-47.7 13-92.3 35.7-130.5C80.4 242.3 162.3 192 256 192s175.6 50.3 220.3 125.5C499 355.7 512 400.3 512 448l0 32L0 480l0-32zm96-48a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64-64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
            <path d="M256 32l69.9 54.1 88.3-2.7 24.7 84.9L512 218l-35.7 99.5C431.6 242.3 349.7 192 256 192s-175.6 50.3-220.3 125.5L0 218l73.1-49.7L97.8 83.4l88.3 2.7L256 32z" />
    </Icon>
);

export default Taco;