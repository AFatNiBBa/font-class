
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `lasso-sparkles` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lasso-sparkles?s=thin lasso-sparkles}
 * @preview ![lasso-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgNDI0SDUwNFYzNjhDNTA0IDM2My41OTQgNTAwLjQwNiAzNjAgNDk2IDM2MFM0ODggMzYzLjU5NCA0ODggMzY4VjQyNEg0MzJDNDI3LjU5NCA0MjQgNDI0IDQyNy41OTQgNDI0IDQzMlM0MjcuNTk0IDQ0MCA0MzIgNDQwSDQ4OFY0OTZDNDg4IDUwMC40MDYgNDkxLjU5NCA1MDQgNDk2IDUwNFM1MDQgNTAwLjQwNiA1MDQgNDk2VjQ0MEg1NjBDNTY0LjQwNiA0NDAgNTY4IDQzNi40MDYgNTY4IDQzMlM1NjQuNDA2IDQyNCA1NjAgNDI0Wk0yNjQgODBDMjY0IDg0LjQwNiAyNjcuNTk0IDg4IDI3MiA4OEgzMjhWMTQ0QzMyOCAxNDguNDA2IDMzMS41OTQgMTUyIDMzNiAxNTJTMzQ0IDE0OC40MDYgMzQ0IDE0NFY4OEg0MDBDNDA0LjQwNiA4OCA0MDggODQuNDA2IDQwOCA4MFM0MDQuNDA2IDcyIDQwMCA3MkgzNDRWMTZDMzQ0IDExLjU5NCAzNDAuNDA2IDggMzM2IDhTMzI4IDExLjU5NCAzMjggMTZWNzJIMjcyQzI2Ny41OTQgNzIgMjY0IDc1LjU5NCAyNjQgODBaTTU3NiAxNzUuOTU1QzU3NiAxMDEuNTk4IDUwMC40MyAzOC4xODIgMzkzLjc3NSAxMi40QzM4OC44MDcgMTEuMTk5IDM4NCAxNS4wNTUgMzg0IDIwLjE2OEMzODQgMjMuODM0IDM4Ni41NTMgMjYuOTggMzkwLjExOSAyNy44MzZDNDg5LjU4IDUxLjY1MiA1NjAgMTA4Ljk4OCA1NjAgMTc1Ljk1NUM1NjAgMjY0LjE4OSA0MzcuOTgyIDMzNS45NzcgMjg4IDMzNS45NzdDMTM4LjAyIDMzNS45NzcgMTYgMjY0LjE4OSAxNiAxNzUuOTU1QzE2IDg5LjI2NCAxMzMuNzkzIDE4LjQ0NyAyODAuMTY2IDE2QzI4NC41IDE1LjkyOCAyODggMTIuNDU1IDI4OCA4LjExOVY3Ljk4OEMyODggMy41NjEgMjg0LjM1MiAtMC4wNzQgMjc5LjkyNCAwQzEyNC42MDIgMi42MTUgMCA4MC4zOTEgMCAxNzUuOTU1QzAgMjQ0LjgxNiA2NC44NDIgMzA0LjI3NyAxNTkuMTA1IDMzMy4yMDNDMTkzLjE4NiAzNDUuMjMyIDIxNiAzNzYuNTM3IDIxNiA0MTIuMDE4QzIxNiA0NTguMzM2IDE3Ny4zNDQgNDk1Ljk5OCAxMjkuODEyIDQ5NS45OThINDBDMzUuNTc4IDQ5NS45OTggMzIgNDk5LjU5MiAzMiA1MDMuOTk4QzMyIDUwOC40MDYgMzUuNTc4IDUxMiA0MCA1MTJIMTI5LjgxMkMxODYuMTU2IDUxMiAyMzIgNDY3LjE1IDIzMiA0MTIuMDE4QzIzMiAzODYuMjkxIDIyMS44MzYgMzYyLjQ4IDIwNC44ODkgMzQ0LjQ2M0MyMzEuMjE3IDM0OS4zMDcgMjU5LjA4OCAzNTEuOTc5IDI4OCAzNTEuOTc5QzQ0Ny4wNTkgMzUxLjk3OSA1NzYgMjczLjE3MiA1NzYgMTc1Ljk1NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LassoSparkles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M560 424H504V368C504 363.594 500.406 360 496 360S488 363.594 488 368V424H432C427.594 424 424 427.594 424 432S427.594 440 432 440H488V496C488 500.406 491.594 504 496 504S504 500.406 504 496V440H560C564.406 440 568 436.406 568 432S564.406 424 560 424ZM264 80C264 84.406 267.594 88 272 88H328V144C328 148.406 331.594 152 336 152S344 148.406 344 144V88H400C404.406 88 408 84.406 408 80S404.406 72 400 72H344V16C344 11.594 340.406 8 336 8S328 11.594 328 16V72H272C267.594 72 264 75.594 264 80ZM576 175.955C576 101.598 500.43 38.182 393.775 12.4C388.807 11.199 384 15.055 384 20.168C384 23.834 386.553 26.98 390.119 27.836C489.58 51.652 560 108.988 560 175.955C560 264.189 437.982 335.977 288 335.977C138.02 335.977 16 264.189 16 175.955C16 89.264 133.793 18.447 280.166 16C284.5 15.928 288 12.455 288 8.119V7.988C288 3.561 284.352 -0.074 279.924 0C124.602 2.615 0 80.391 0 175.955C0 244.816 64.842 304.277 159.105 333.203C193.186 345.232 216 376.537 216 412.018C216 458.336 177.344 495.998 129.812 495.998H40C35.578 495.998 32 499.592 32 503.998C32 508.406 35.578 512 40 512H129.812C186.156 512 232 467.15 232 412.018C232 386.291 221.836 362.48 204.889 344.463C231.217 349.307 259.088 351.979 288 351.979C447.059 351.979 576 273.172 576 175.955Z" />
        </Icon>
    </>
}