const Statistics = ({ stats, title }) => {
  console.log(stats);

  return (
    <section class='statistics'>
      {title && <h2 class='title'>Upload stats</h2>}

      <ul class='stat-list'>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} class='item'>
            <span class='label'>{label}</span>
            <span class='percentage'>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
