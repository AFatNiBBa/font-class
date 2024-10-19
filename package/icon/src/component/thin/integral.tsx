
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `integral` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=thin integral}
 * @preview ![integral](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggNjhWNzJDMjg4IDc2LjQwNiAyODQuNDIyIDgwIDI4MCA4MFMyNzIgNzYuNDA2IDI3MiA3MlY2OEMyNzIgMzkuMzEyIDI0OC42NzIgMTYgMjIwIDE2UzE2OCAzOS4zMTIgMTY4IDY4VjQ0NEMxNjggNDgxLjUgMTM3LjUgNTEyIDEwMCA1MTJTMzIgNDgxLjUgMzIgNDQ0VjQ0MEMzMiA0MzUuNTk0IDM1LjU3OCA0MzIgNDAgNDMyUzQ4IDQzNS41OTQgNDggNDQwVjQ0NEM0OCA0NzIuNjg4IDcxLjMyOCA0OTYgMTAwIDQ5NlMxNTIgNDcyLjY4OCAxNTIgNDQ0VjY4QzE1MiAzMC41IDE4Mi41IDAgMjIwIDBTMjg4IDMwLjUgMjg4IDY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Integral(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M288 68V72C288 76.406 284.422 80 280 80S272 76.406 272 72V68C272 39.312 248.672 16 220 16S168 39.312 168 68V444C168 481.5 137.5 512 100 512S32 481.5 32 444V440C32 435.594 35.578 432 40 432S48 435.594 48 440V444C48 472.688 71.328 496 100 496S152 472.688 152 444V68C152 30.5 182.5 0 220 0S288 30.5 288 68Z" />
        </Icon>
    </>
}