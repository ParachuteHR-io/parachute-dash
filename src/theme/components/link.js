export const linkStyles = {
  components: {
    Link: {
      // 3. We can add a new visual variant
      baseStyle: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        },
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
};