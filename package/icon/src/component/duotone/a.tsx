
import { Icon, generic } from "../../index";

/**
 * A component that renders the `a` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=duotone a}
 * @preview ![a](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjEuNSA1MS43QzIxNi42IDM5LjggMjA0LjkgMzIgMTkyIDMycy0yNC42IDcuOC0yOS41IDE5LjdsLTEyMCAyODgtNDAgOTZjLTYuOCAxNi4zIC45IDM1IDE3LjIgNDEuOHMzNS0uOSA0MS44LTE3LjJMOTMuMyAzODRsMTk3LjMgMCAzMS44IDc2LjNjNi44IDE2LjMgMjUuNSAyNCA0MS44IDE3LjJzMjQtMjUuNSAxNy4yLTQxLjhsLTQwLTk2LTEyMC0yODh6TTI2NCAzMjBsLTE0NCAwIDcyLTE3Mi44TDI2NCAzMjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const A: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384l197.3 0 31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320l-144 0 72-172.8L264 320z" />
    </Icon>
);

export default A;