export function Section({ children, ...props }) {
    return (
        <div {...props}>
            {children}
        </div>
    )
}