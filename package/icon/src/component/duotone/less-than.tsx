
import { Icon, generic } from "../../index";

/**
 * A component that renders the `less-than` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=duotone less-than}
 * @preview ![less-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODAuNiA4MS43YzcuOSAxNS44IDEuNSAzNS0xNC4zIDQyLjlMMTAzLjYgMjU2IDM2Ni4zIDM4Ny40YzE1LjggNy45IDIyLjIgMjcuMSAxNC4zIDQyLjlzLTI3LjEgMjIuMi00Mi45IDE0LjNsLTMyMC0xNjBDNi44IDI3OS4yIDAgMjY4LjEgMCAyNTZzNi44LTIzLjIgMTcuNy0yOC42bDMyMC0xNjBjMTUuOC03LjkgMzUtMS41IDQyLjkgMTQuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" />
    </Icon>
);

export default LessThan;