<template>
  <div class="card">
    <a-row v-for="(card, id) in info" :key="id">
      <a-col :span="23">
        <a-card :title="id" :bordered="false">
          <span
            v-for="(val, key) in card"
            :key="`${key}-${val}-id`"
            class="label-wrap"
          >
            <label class="label" v-if="!/id|show/.test(key)"
              ><strong v-if="card.showLabels">{{ key }}:</strong>
              <a
                v-if="/Em|Ph|We/.test(key)"
                :href="getHref(key, val)"
                :target="/We/.test(key) ? '_blank' : null"
                >{{ val }}</a
              >
              <q v-else-if="key === 'cp'"
                ><em>{{ val }}</em></q
              >
              <div v-else>{{ val }}</div>
            </label>
          </span>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Card, Row, Col } from "ant-design-vue";
export default {
  components: {
    "a-card": Card,
    "a-row": Row,
    "a-col": Col,
  },
  props: ["info", "posts", "use-carousel"],
  methods: {
    getHref(key, val) {
      return {
        Email: `mailto:${val}`,
        Phone: `tel:${val}`,
        Website: `//${val}`,
      }[key];
    },
  },
};
</script>

<style lang="less">
@import "../styles/global.less";

.card {
  display: flex;
  flex-flow: column;
  padding: 20px;
  margin-bottom: 50px;

  .ant-card {
    font-size: 1rem;
    border-radius: 4px;
    box-shadow: -10px 10px 10px -5px rgba(black, 0.15),
      0 1px 0 0 rgba(black, 0.25);
    border-bottom: 1px solid gray;

    &-head-title {
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
    }

    .ant-card-body {
      display: flex;
      flex-flow: column;
      align-items: center;
      padding: 10px;
    }
  }

  .ant-row {
    flex-grow: 1;

    .label-wrap {
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
    }

    .label {
      display: flex;
      flex-grow: 1;
      & strong {
        min-width: 85px;
        margin-right: 5px;
        text-align: right;
      }
      & input {
        border: none;
        flex-grow: 1;
        outline: none;
      }
    }
  }
  .md({
    flex-flow: row;

    .ant-card-body {
      min-height: 160px;
      flex-flow: column;
      justify-content: center;

      & strong {
        text-align: center;
      }
      & div {
        // flex-grow: 1;
      }
    }
  });
}
</style>
