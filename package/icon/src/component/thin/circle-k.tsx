
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-k` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=thin circle-k}
 * @preview ![circle-k](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDkuODU5IDEzMC41NDdDMzQ2Ljg1OSAxMjcuMzQ0IDM0MS43OTcgMTI3LjEwOSAzMzguNTQ3IDEzMC4xNDFMMTc2IDI4MS4yNzNWMTM2QzE3NiAxMzEuNTc4IDE3Mi40MjIgMTI4IDE2OCAxMjhTMTYwIDEzMS41NzggMTYwIDEzNlYzNzZDMTYwIDM4MC40MjIgMTYzLjU3OCAzODQgMTY4IDM4NFMxNzYgMzgwLjQyMiAxNzYgMzc2VjMwMy4xMzNMMjM1LjczMiAyNDcuNTk0TDMzNy42NDEgMzgwLjg1OUMzMzkuMjE5IDM4Mi45MjIgMzQxLjU5NCAzODQgMzQ0IDM4NEMzNDUuNzAzIDM4NCAzNDcuNDA2IDM4My40NjkgMzQ4Ljg1OSAzODIuMzU5QzM1Mi4zNzUgMzc5LjY3MiAzNTMuMDMxIDM3NC42NTYgMzUwLjM1OSAzNzEuMTQxTDI0Ny41MSAyMzYuNjQ1TDM0OS40NTMgMTQxLjg1OUMzNTIuNjg4IDEzOC44NDQgMzUyLjg3NSAxMzMuNzgxIDM0OS44NTkgMTMwLjU0N1pNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDgwQzEzMi40ODYgNDgwIDMyIDM3OS41MTQgMzIgMjU2UzEzMi40ODYgMzIgMjU2IDMyUzQ4MCAxMzIuNDg2IDQ4MCAyNTZTMzc5LjUxNCA0ODAgMjU2IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleK(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M349.859 130.547C346.859 127.344 341.797 127.109 338.547 130.141L176 281.273V136C176 131.578 172.422 128 168 128S160 131.578 160 136V376C160 380.422 163.578 384 168 384S176 380.422 176 376V303.133L235.732 247.594L337.641 380.859C339.219 382.922 341.594 384 344 384C345.703 384 347.406 383.469 348.859 382.359C352.375 379.672 353.031 374.656 350.359 371.141L247.51 236.645L349.453 141.859C352.688 138.844 352.875 133.781 349.859 130.547ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}