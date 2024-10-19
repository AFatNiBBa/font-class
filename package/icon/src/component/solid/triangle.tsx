
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=solid triangle}
 * @preview ![triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDYuMjc0IDQxN0M1MjIuNjA2IDQ0NSA1MDIuMDUyIDQ4MCA0NjkuMjc1IDQ4MEg0Mi43MzlDOS44NTIgNDgwIC0xMC41OTIgNDQ0Ljg5MSA1Ljc0MSA0MTdMMjE4Ljk1NCA1M0MyMzUuMzk3IDI1IDI3Ni42MTcgMjUgMjkyLjk1IDUzTDUwNi4yNzQgNDE3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Triangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M506.274 417C522.606 445 502.052 480 469.275 480H42.739C9.852 480 -10.592 444.891 5.741 417L218.954 53C235.397 25 276.617 25 292.95 53L506.274 417Z" />
        </Icon>
    </>
}