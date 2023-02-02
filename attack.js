const attack = (createName, damage, isCritical) => {
  return `${createName} dealt ${isCritical ? damage * 2 : damage}`;
};

module.exports = attack;
