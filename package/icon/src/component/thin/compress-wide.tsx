
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `compress-wide` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=thin compress-wide}
 * @preview ![compress-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTIgNjRDMTQ3LjU5NCA2NCAxNDQgNjcuNTc4IDE0NCA3MlYyMDhIOEMzLjU5NCAyMDggMCAyMTEuNTc4IDAgMjE2UzMuNTk0IDIyNCA4IDIyNEgxNTJDMTU2LjQwNiAyMjQgMTYwIDIyMC40MjIgMTYwIDIxNlY3MkMxNjAgNjcuNTc4IDE1Ni40MDYgNjQgMTUyIDY0Wk0zNjAgMjI0SDUwNEM1MDguNDA2IDIyNCA1MTIgMjIwLjQyMiA1MTIgMjE2UzUwOC40MDYgMjA4IDUwNCAyMDhIMzY4VjcyQzM2OCA2Ny41NzggMzY0LjQwNiA2NCAzNjAgNjRTMzUyIDY3LjU3OCAzNTIgNzJWMjE2QzM1MiAyMjAuNDIyIDM1NS41OTQgMjI0IDM2MCAyMjRaTTUwNCAyODhIMzYwQzM1NS41OTQgMjg4IDM1MiAyOTEuNTc4IDM1MiAyOTZWNDQwQzM1MiA0NDQuNDIyIDM1NS41OTQgNDQ4IDM2MCA0NDhTMzY4IDQ0NC40MjIgMzY4IDQ0MFYzMDRINTA0QzUwOC40MDYgMzA0IDUxMiAzMDAuNDIyIDUxMiAyOTZTNTA4LjQwNiAyODggNTA0IDI4OFpNMTUyIDI4OEg4QzMuNTk0IDI4OCAwIDI5MS41NzggMCAyOTZTMy41OTQgMzA0IDggMzA0SDE0NFY0NDBDMTQ0IDQ0NC40MjIgMTQ3LjU5NCA0NDggMTUyIDQ0OFMxNjAgNDQ0LjQyMiAxNjAgNDQwVjI5NkMxNjAgMjkxLjU3OCAxNTYuNDA2IDI4OCAxNTIgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CompressWide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M152 64C147.594 64 144 67.578 144 72V208H8C3.594 208 0 211.578 0 216S3.594 224 8 224H152C156.406 224 160 220.422 160 216V72C160 67.578 156.406 64 152 64ZM360 224H504C508.406 224 512 220.422 512 216S508.406 208 504 208H368V72C368 67.578 364.406 64 360 64S352 67.578 352 72V216C352 220.422 355.594 224 360 224ZM504 288H360C355.594 288 352 291.578 352 296V440C352 444.422 355.594 448 360 448S368 444.422 368 440V304H504C508.406 304 512 300.422 512 296S508.406 288 504 288ZM152 288H8C3.594 288 0 291.578 0 296S3.594 304 8 304H144V440C144 444.422 147.594 448 152 448S160 444.422 160 440V296C160 291.578 156.406 288 152 288Z" />
        </Icon>
    </>
}