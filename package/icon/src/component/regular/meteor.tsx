
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `meteor` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=regular meteor}
 * @preview ![meteor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjIuNDQ4IDQyLjgzN0M0NTMuOTQ3IDcxLjA4NyA0MzMuMzIgMTM3LjQ2MiA0MTAuMDY4IDE5NS45NjJDNDIwLjQ0NCAxOTkuOTYyIDQyOC41NyAyMDguMDg3IDQzMi40NDUgMjE4LjMzN0M0MzYuMzIgMjI4LjcxMiA0MzUuNjk1IDI0MC4wODcgNDMwLjU3IDI0OS44MzdDNDA4LjU2OCAyOTEuOTYyIDM1MS4xODggMzk2LjIxMiAyOTQuMTgzIDQ1My4yMTJDMjE1LjgwMSA1MzEuNTg3IDg4LjkxNCA1MzEuNTg3IDEwLjUzMiA0NTMuMjEyQy02Ny42IDM3NS4wODcgLTY3LjYgMjQ3LjgzNyAxMC41MzIgMTY5LjcxMkM2Ny43ODcgMTEyLjU4NyAxNzEuNzk3IDU1LjQ2MiAyMTQuMDUxIDMzLjQ2MkMyMjMuODAxIDI4LjMzNyAyMzUuMzAyIDI3LjU4NyAyNDUuNTUzIDMxLjQ2MlMyNjMuOTMgNDMuNDYyIDI2Ny45MyA1My43MTJDMzI2LjE4NiAzMC41ODcgMzkyLjgxNyA5Ljk2MiA0MjEuMTk0IDEuNDYyQzQzMi45NDUgLTIuMTYzIDQ0NS42OTYgMS4wODcgNDU0LjMyMiA5LjcxMkM0NjIuOTQ4IDE4LjMzNyA0NjYuMDczIDMxLjA4NyA0NjIuNDQ4IDQyLjgzN1pNMzQ1LjMxMiAyMjYuNzEyTDM1Ni4wNjMgMjAxLjgzN0MzNzYuNTY1IDE1My45NjIgMzk2LjE5MiA5NC4zMzcgNDA4LjQ0MyA1NS40NjJDMzY5LjU2NCA2Ny43MTIgMzA5LjY4NCA4Ny40NjIgMjYyLjE4IDEwNy45NjJMMjM3LjE3OCAxMTguNTg3TDIyOS42NzcgOTIuNTg3QzIyOC40MjcgODguNTg3IDIyNy4zMDIgODQuODM3IDIyNi4xNzcgODEuMjEyQzE4Ni4yOTggMTAyLjQ2MiA5My42NjUgMTU0LjQ2MiA0NC41MzUgMjAzLjU4N0MtMTQuODQ1IDI2My4wODcgLTE0Ljg0NSAzNTkuODM3IDQ0LjUzNSA0MTkuMjEyQzczLjE2MyA0NDcuODM3IDExMS45MTYgNDYzLjk2MiAxNTIuNDIgNDYzLjk2MkMxOTIuNzk5IDQ2My45NjIgMjMxLjY3NyA0NDcuODM3IDI2MC4xOCA0MTkuMjEyQzMwOC42ODQgMzcwLjgzNyAzNTguODE0IDI4Mi40NjIgMzgyLjY5MSAyMzcuNzEyQzM3OS4wNjUgMjM2LjcxMiAzNzUuMzE1IDIzNS41ODcgMzcxLjMxNSAyMzQuMzM3TDM0NS4zMTIgMjI2LjcxMlpNMjYzLjkzIDMxMS45NjJDMjYzLjkzIDM3My44MzcgMjEzLjggNDIzLjk2MiAxNTEuOTIgNDIzLjk2MlMzOS45MSAzNzMuODM3IDM5LjkxIDMxMS45NjJTOTAuMTY0IDE5OS45NjIgMTUxLjkyIDE5OS45NjJDMjEzLjggMTk5Ljk2MiAyNjMuOTMgMjUwLjA4NyAyNjMuOTMgMzExLjk2MlpNMTUxLjkyIDI4Ny45NjJDMTUxLjkyIDI3NC43MTIgMTQxLjE2OSAyNjMuOTYyIDEyNy45MTggMjYzLjk2MlMxMDMuOTE2IDI3NC43MTIgMTAzLjkxNiAyODcuOTYyUzExNC42NjcgMzExLjk2MiAxMjcuOTE4IDMxMS45NjJDMTM0LjI5MyAzMTEuOTYyIDE0MC40MTkgMzA5LjQ2MiAxNDQuOTE5IDMwNC45NjJDMTQ5LjQyIDMwMC40NjIgMTUxLjkyIDI5NC4zMzcgMTUxLjkyIDI4Ny45NjJaTTE4My45MjMgMzU5Ljk2MkMxODMuOTIzIDM1MS4wODcgMTc2Ljc5NyAzNDMuOTYyIDE2Ny45MjEgMzQzLjk2MkMxNTkuMTcxIDM0My45NjIgMTUxLjkyIDM1MS4wODcgMTUxLjkyIDM1OS45NjJTMTU5LjE3MSAzNzUuOTYyIDE2Ny45MjEgMzc1Ljk2MkMxNzYuNzk3IDM3NS45NjIgMTgzLjkyMyAzNjguODM3IDE4My45MjMgMzU5Ljk2MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Meteor(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M462.448 42.837C453.947 71.087 433.32 137.462 410.068 195.962C420.444 199.962 428.57 208.087 432.445 218.337C436.32 228.712 435.695 240.087 430.57 249.837C408.568 291.962 351.188 396.212 294.183 453.212C215.801 531.587 88.914 531.587 10.532 453.212C-67.6 375.087 -67.6 247.837 10.532 169.712C67.787 112.587 171.797 55.462 214.051 33.462C223.801 28.337 235.302 27.587 245.553 31.462S263.93 43.462 267.93 53.712C326.186 30.587 392.817 9.962 421.194 1.462C432.945 -2.163 445.696 1.087 454.322 9.712C462.948 18.337 466.073 31.087 462.448 42.837ZM345.312 226.712L356.063 201.837C376.565 153.962 396.192 94.337 408.443 55.462C369.564 67.712 309.684 87.462 262.18 107.962L237.178 118.587L229.677 92.587C228.427 88.587 227.302 84.837 226.177 81.212C186.298 102.462 93.665 154.462 44.535 203.587C-14.845 263.087 -14.845 359.837 44.535 419.212C73.163 447.837 111.916 463.962 152.42 463.962C192.799 463.962 231.677 447.837 260.18 419.212C308.684 370.837 358.814 282.462 382.691 237.712C379.065 236.712 375.315 235.587 371.315 234.337L345.312 226.712ZM263.93 311.962C263.93 373.837 213.8 423.962 151.92 423.962S39.91 373.837 39.91 311.962S90.164 199.962 151.92 199.962C213.8 199.962 263.93 250.087 263.93 311.962ZM151.92 287.962C151.92 274.712 141.169 263.962 127.918 263.962S103.916 274.712 103.916 287.962S114.667 311.962 127.918 311.962C134.293 311.962 140.419 309.462 144.919 304.962C149.42 300.462 151.92 294.337 151.92 287.962ZM183.923 359.962C183.923 351.087 176.797 343.962 167.921 343.962C159.171 343.962 151.92 351.087 151.92 359.962S159.171 375.962 167.921 375.962C176.797 375.962 183.923 368.837 183.923 359.962Z" />
        </Icon>
    </>
}