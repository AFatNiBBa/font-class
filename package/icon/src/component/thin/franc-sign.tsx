
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `franc-sign` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=thin franc-sign}
 * @preview ![franc-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDBDMzIwIDQ0LjQyMiAzMTYuNDA2IDQ4IDMxMiA0OEgxMDRDOTAuNzgxIDQ4IDgwIDU4Ljc2NiA4MCA3MlYyMDhIMjgwQzI4NC40MDYgMjA4IDI4OCAyMTEuNTc4IDI4OCAyMTZTMjg0LjQwNiAyMjQgMjgwIDIyNEg4MFYzMzZIMjE2QzIyMC40MDYgMzM2IDIyNCAzMzkuNTc4IDIyNCAzNDRTMjIwLjQwNiAzNTIgMjE2IDM1Mkg4MFY0NzJDODAgNDc2LjQyMiA3Ni40MDYgNDgwIDcyIDQ4MFM2NCA0NzYuNDIyIDY0IDQ3MlYzNTJIOEMzLjU5NCAzNTIgMCAzNDguNDIyIDAgMzQ0UzMuNTk0IDMzNiA4IDMzNkg2NFY3MkM2NCA0OS45MzggODEuOTM4IDMyIDEwNCAzMkgzMTJDMzE2LjQwNiAzMiAzMjAgMzUuNTc4IDMyMCA0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FrancSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 40C320 44.422 316.406 48 312 48H104C90.781 48 80 58.766 80 72V208H280C284.406 208 288 211.578 288 216S284.406 224 280 224H80V336H216C220.406 336 224 339.578 224 344S220.406 352 216 352H80V472C80 476.422 76.406 480 72 480S64 476.422 64 472V352H8C3.594 352 0 348.422 0 344S3.594 336 8 336H64V72C64 49.938 81.938 32 104 32H312C316.406 32 320 35.578 320 40Z" />
        </Icon>
    </>
}