
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-long` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=regular arrow-down-long}
 * @preview ![arrow-down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03LjAzMSAzMzUuMDMxQzExLjcxOSAzMzAuMzQ0IDE3Ljg0NCAzMjggMjQgMzI4UzM2LjI4MSAzMzAuMzQ0IDQwLjk2OSAzMzUuMDMxTDEzNiA0MzAuMDYyVjI0QzEzNiAxMC43NSAxNDYuNzUgMCAxNjAgMFMxODQgMTAuNzUgMTg0IDI0VjQzMC4wNjJMMjc5LjAzMSAzMzUuMDMxQzI4OC40MDYgMzI1LjY1NiAzMDMuNTk0IDMyNS42NTYgMzEyLjk2OSAzMzUuMDMxUzMyMi4zNDQgMzU5LjU5NCAzMTIuOTY5IDM2OC45NjlMMTc2Ljk2OSA1MDQuOTY5QzE2Ny41OTQgNTE0LjM0NCAxNTIuNDA2IDUxNC4zNDQgMTQzLjAzMSA1MDQuOTY5TDcuMDMxIDM2OC45NjlDLTIuMzQ0IDM1OS41OTQgLTIuMzQ0IDM0NC40MDYgNy4wMzEgMzM1LjAzMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowDownLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M7.031 335.031C11.719 330.344 17.844 328 24 328S36.281 330.344 40.969 335.031L136 430.062V24C136 10.75 146.75 0 160 0S184 10.75 184 24V430.062L279.031 335.031C288.406 325.656 303.594 325.656 312.969 335.031S322.344 359.594 312.969 368.969L176.969 504.969C167.594 514.344 152.406 514.344 143.031 504.969L7.031 368.969C-2.344 359.594 -2.344 344.406 7.031 335.031Z" />
        </Icon>
    </>
}