<script>
import { check } from "../utils/auth";

export default {
  name: "Authorized",
  functional: true,
  props: {
    authority: {
      type: Array,
      require: true
    }
  },
  render(h, context) {
    const { props, scopedSlots } = context;
    return check(props.authority) ? scopedSlots.default() : null;
  }
};
</script>

<style scoped></style>
