$projects = @("composer", "body", "header", "contact")

foreach ($project in $projects) {
    Write-Output "Install dependencies $project..."
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $project; yarn"
}
