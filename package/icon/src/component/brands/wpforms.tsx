
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wpforms` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wpforms?s=brands wpforms}
 * @preview ![wpforms](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNzUuMnYzNjEuN2MwIDI0LjMtMTkgNDMuMi00My4yIDQzLjJINDMuMkMxOS4zIDQ4MCAwIDQ2MS40IDAgNDM2LjhWNzUuMkMwIDUxLjEgMTguOCAzMiA0My4yIDMyaDM2MS43YzI0IDAgNDMuMSAxOC44IDQzLjEgNDMuMnptLTM3LjMgMzYxLjZWNzUuMmMwLTMtMi42LTUuOC01LjgtNS44aC05LjNMMjg1LjMgMTQ0IDIyNCA5NC4xIDE2Mi44IDE0NCA1Mi41IDY5LjNoLTkuM2MtMy4yIDAtNS44IDIuOC01LjggNS44djM2MS43YzAgMyAyLjYgNS44IDUuOCA1LjhoMzYxLjdjMy4yLjEgNS44LTIuNyA1LjgtNS44ek0xNTAuMiAxODZ2MzdINzYuN3YtMzdoNzMuNXptMCA3NC40djM3LjNINzYuN3YtMzcuM2g3My41em0xMS4xLTE0Ny4zbDU0LTQzLjdIOTYuOGw2NC41IDQzLjd6bTIxMCA3Mi45djM3aC0xOTZ2LTM3aDE5NnptMCA3NC40djM3LjNoLTE5NnYtMzcuM2gxOTZ6bS04NC42LTE0Ny4zbDY0LjUtNDMuN0gyMzIuOGw1My45IDQzLjd6TTM3MS4zIDMzNXYzNy4zaC05OS40VjMzNWg5OS40eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Wpforms(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z" />
        </Icon>
    </>
}