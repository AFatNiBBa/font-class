
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=duotone sparkle}
 * @preview ![sparkle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNDUuOCA0NS45QzI0MS45IDM3LjQgMjMzLjQgMzIgMjI0IDMycy0xNy45IDUuNC0yMS44IDEzLjlMMTQyLjcgMTc0LjcgMTMuOSAyMzQuMkM1LjQgMjM4LjEgMCAyNDYuNiAwIDI1NnM1LjQgMTcuOSAxMy45IDIxLjhsMTI4LjggNTkuNSA1OS41IDEyOC44YzMuOSA4LjUgMTIuNCAxMy45IDIxLjggMTMuOXMxNy45LTUuNCAyMS44LTEzLjlsNTkuNS0xMjguOCAxMjguOC01OS41YzguNS0zLjkgMTMuOS0xMi40IDEzLjktMjEuOHMtNS40LTE3LjktMTMuOS0yMS44TDMwNS4zIDE3NC43IDI0NS44IDQ1Ljl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M245.8 45.9C241.9 37.4 233.4 32 224 32s-17.9 5.4-21.8 13.9L142.7 174.7 13.9 234.2C5.4 238.1 0 246.6 0 256s5.4 17.9 13.9 21.8l128.8 59.5 59.5 128.8c3.9 8.5 12.4 13.9 21.8 13.9s17.9-5.4 21.8-13.9l59.5-128.8 128.8-59.5c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8L305.3 174.7 245.8 45.9z" />
    </Icon>
);

export default Sparkle;