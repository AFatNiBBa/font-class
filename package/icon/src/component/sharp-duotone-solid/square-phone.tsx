
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-phone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=sharp-duotone-solid square-phone}
 * @preview ![square-phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTk2IDE0NGw3Mi0xNmMxMy4zIDI0IDI2LjcgNDggNDAgNzJsLTQxLjkgMzMuNWMxOC4xIDM0LjIgNDYuMiA2Mi4zIDgwLjQgODAuNEwyODAgMjcyYzI0IDEzLjMgNDggMjYuNyA3MiA0MGwtMTYgNzItMTYgMEMxOTYuMyAzODQgOTYgMjgzLjcgOTYgMTYwYzAtNS4zIDAtMTAuNyAwLTE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMTQ0bDcyLTE2IDQwIDcyLTQxLjkgMzMuNWMxOC4xIDM0LjIgNDYuMiA2Mi4zIDgwLjQgODAuNEwyODAgMjcybDcyIDQwLTE2IDcySDMyMEMxOTYuMyAzODQgOTYgMjgzLjcgOTYgMTYwbDAtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquarePhone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 144l72-16c13.3 24 26.7 48 40 72l-41.9 33.5c18.1 34.2 46.2 62.3 80.4 80.4L280 272c24 13.3 48 26.7 72 40l-16 72-16 0C196.3 384 96 283.7 96 160c0-5.3 0-10.7 0-16z" />
            <path d="M96 144l72-16 40 72-41.9 33.5c18.1 34.2 46.2 62.3 80.4 80.4L280 272l72 40-16 72H320C196.3 384 96 283.7 96 160l0-16z" />
    </Icon>
);

export default SquarePhone;