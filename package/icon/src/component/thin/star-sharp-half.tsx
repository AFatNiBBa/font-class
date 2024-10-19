
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-sharp-half` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp-half?s=thin star-sharp-half}
 * @preview ![star-sharp-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjMuMjc4IDE3Ljk2OUwyMTEuOTAzIDE3Ni4yMTlMNDYuOTEyIDE3Ni4yMTlDMzUuNjcyIDE3Ni4yMTkgMjUuMDU3IDE4Mi45MDYgMjEuNDMgMTkzLjU0NEMxNy43MjggMjA0LjQwMyAyMS4zNjMgMjE1LjgzMSAzMC42MDYgMjIyLjU2MkwxNjUuMTA2IDMyMC4zNzVMMTEzLjczMSA0NzguNjI1QzExMS4xNTMgNDg2LjU2MiAxMTIuNDM0IDQ5NC44NzUgMTE3LjI0NyA1MDEuNUMxMjUuMzA5IDUxMi41NjIgMTQxLjYzNyA1MTUuNTMxIDE1My4xMzcgNTA3LjI4MUwyODEuMDQ4IDQxNC4yNjFDMjg1LjE4OCA0MTEuMjUgMjg3LjYzNyA0MDYuNDQgMjg3LjYzNyA0MDEuMzIxVjEwLjE0MUMyODcuNjM3IDQuMjc5IDI4MS40NzYgMC4yNzcgMjc2LjIxNCAyLjg1OUMyNzAuMTkgNS44MTYgMjY1LjUwNiAxMS4xMjYgMjYzLjI3OCAxNy45NjlaTTE0My43NjIgNDk0LjMxMkMxMzYuNDQ2IDQ5OS41OTIgMTI1Ljk3MyA0OTIuNzQ4IDEyOC45NSA0ODMuNTYyTDE4My45MTkgMzE0LjI1TDQwLjAxMiAyMDkuNjI1QzMyLjQ2IDIwNC4xMzkgMzYuMzYgMTkyLjIxOSA0NS42NTMgMTkyLjIxOUgyMjMuNTI4TDI3MS42MzcgNDQuMDM1VjQwMS4yOTVMMTQzLjc2MiA0OTQuMzEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StarSharpHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M263.278 17.969L211.903 176.219L46.912 176.219C35.672 176.219 25.057 182.906 21.43 193.544C17.728 204.403 21.363 215.831 30.606 222.562L165.106 320.375L113.731 478.625C111.153 486.562 112.434 494.875 117.247 501.5C125.309 512.562 141.637 515.531 153.137 507.281L281.048 414.261C285.188 411.25 287.637 406.44 287.637 401.321V10.141C287.637 4.279 281.476 0.277 276.214 2.859C270.19 5.816 265.506 11.126 263.278 17.969ZM143.762 494.312C136.446 499.592 125.973 492.748 128.95 483.562L183.919 314.25L40.012 209.625C32.46 204.139 36.36 192.219 45.653 192.219H223.528L271.637 44.035V401.295L143.762 494.312Z" />
        </Icon>
    </>
}