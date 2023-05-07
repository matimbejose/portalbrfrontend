<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const chartCanvas = this.$refs.chartCanvas;
    const chartCtx = chartCanvas.getContext('2d');

    const chart = new Chart(chartCtx, {
      type: 'pie',
      data: {
        labels: this.chartData.labels,
        datasets: [{
          data: this.chartData.values,
          backgroundColor: this.chartData.colors
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: this.chartData.title
        },
        legend: {
          position: 'top'
        }
      }
    });
  }
};
</script>
