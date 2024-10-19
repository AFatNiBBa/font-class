
import { Icon, generic } from "../../index";

/**
 * A component that renders the `map` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=duotone map}
 * @preview ![map](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMzJjLjEgMTI4IC4xIDI1NiAuMSAzODRjNjQgMjEuMyAxMjggNDIuNyAxOTIgNjRsMC0zODRDMzIwIDc0LjcgMjU2IDUzLjMgMTkyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxMTQuNVY0NjRjMCAxMS4zIDExLjUgMTkgMjIgMTQuOEwxOTIgNDE2bC0uMS0zODRMMTAuMSA5OS42QzQgMTAyIDAgMTA3LjkgMCAxMTQuNXpNNTU0IDMzLjJMMzg0IDk2VjQ4MGwxODEuOS02Ny42YzYuMS0yLjQgMTAuMS04LjMgMTAuMS0xNC45VjQ4YzAtMTEuMy0xMS40LTE5LjEtMjItMTQuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 32c.1 128 .1 256 .1 384c64 21.3 128 42.7 192 64l0-384C320 74.7 256 53.3 192 32z" />
            <path d="M0 114.5V464c0 11.3 11.5 19 22 14.8L192 416l-.1-384L10.1 99.6C4 102 0 107.9 0 114.5zM554 33.2L384 96V480l181.9-67.6c6.1-2.4 10.1-8.3 10.1-14.9V48c0-11.3-11.4-19.1-22-14.9z" />
    </Icon>
);

export default Map;