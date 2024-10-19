
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `kaggle` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/kaggle?s=brands kaggle}
 * @preview ![kaggle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQuMiA1MDEuNUwxNTguNCAzMjAuMyAyOTguMiAxODVjMi42LTIuNyAxLjctMTAuNS01LjMtMTAuNWgtNjkuMmMtMy41IDAtNyAxLjgtMTAuNSA1LjNMODAuOSAzMTMuNVY3LjVxMC03LjUtNy41LTcuNUgyMS41UTE0IDAgMTQgNy41djQ5N3EwIDcuNSA3LjUgNy41aDUxLjlxNy41IDAgNy41LTcuNXYtMTA5bDMwLjgtMjkuMyAxMTAuNSAxNDAuNmMzIDMuNSA2LjUgNS4zIDEwLjUgNS4zaDY2LjlxNS4yNSAwIDYtM3oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Kaggle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z" />
        </Icon>
    </>
}